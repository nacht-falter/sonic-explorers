import React, { useState, useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";

import { axiosRequest } from "../../api/axiosDefaults";
import { fetchMoreData } from "../../utils/utils";
import Notification from "./Notification";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import LoggedOutMessage from "../../components/LoggedOutMessage";

const NotificationPage = ({ showMessage }) => {
  const [notifications, setNotifications] = useState({ results: [] });
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosRequest.get(`/notifications/`);
        setNotifications(data);
      } catch (err) {
        // console.log(err);
      }
      setHasLoaded(true);
    };

    handleMount();
  }, []);

  return !currentUser ? (
    <LoggedOutMessage />
  ) : (
    <>
      <h3>Your Notifications</h3>
      {hasLoaded ? (
        notifications.results.length ? (
          <InfiniteScroll className="overflow-hidden"
            children={notifications.results.map((notification) => (
              <Notification
                key={notification.id}
                {...notification}
                setNotifications={setNotifications}
                showMessage={showMessage}
              />
            ))}
            dataLength={notifications.results.length}
            loader={
              <div className="mt-3 text-muted text-center">
                <Spinner />
              </div>
            }
            hasMore={!!notifications.next}
            next={() => fetchMoreData(notifications, setNotifications)}
          />
        ) : (
          <p>No new notifications</p>
        )
      ) : (
        <Asset spinner />
      )}
    </>
  );
};

export default NotificationPage;
