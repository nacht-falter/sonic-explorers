import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";

import { axiosRequest } from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";
import Report from "./Report";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import LoggedOutMessage from "../../components/LoggedOutMessage";
import StaffOnlyMessage from "../../components/StaffOnlyMessage";

const ReportPage = ({ showMessage }) => {
  const [reports, setReports] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosRequest.get(`/reports/`);
        setReports(data);
      } catch (err) {
        // console.log(err);
      }
      setHasLoaded(true);
    };

    currentUser?.is_staff && handleMount();
  }, [currentUser]);

  return !currentUser ? (
    <LoggedOutMessage />
  ) : !currentUser?.is_staff ? (
    <StaffOnlyMessage />
  ) : (
    <>
      <h3>Reports</h3>
      {hasLoaded ? (
        reports.results.length ? (
          <InfiniteScroll
            className="overflow-hidden"
            children={reports.results.map((report) => (
              <Report key={report.id} {...report} setReports={setReports} showMessage={showMessage} />
            ))}
            dataLength={reports.results.length}
            loader={
              <div className="mt-3 text-muted text-center">
                <Spinner />
              </div>
            }
            hasMore={!!reports.next}
            next={() => fetchMoreData(reports, setReports)}
          />
        ) : (
          <p>No new reports</p>
        )
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default ReportPage;
