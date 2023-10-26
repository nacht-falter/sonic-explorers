import { rest } from "msw";

const baseURL = "https://sonic-explorers-api-4c187c4cd99f.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 1,
        username: "testuser",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 1,
        profile_image: "https://res.cloudinary.com/dmmd6fle7/image/upload/default_profile_p5rke8",
        is_staff: true,
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post(`${baseURL}dj-rest-auth/token/refresh/`, (req, res, ctx) => {
    return res(
      ctx.json({
        access: "test-access-token",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/login/`, (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          pk: 1,
          username: "testuser",
          email: "",
          first_name: "",
          last_name: "",
          profile_id: 1,
          profile_image: "https://res.cloudinary.com/dmmd6fle7/image/upload/default_profile_p5rke8",
          is_staff: true,
        },
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/registration/`, (req, res, ctx) => {
    return res(
      ctx.json({
        user: {
          pk: 1,
          username: "testuser",
          email: "",
          first_name: "",
          last_name: "",
          profile_id: 1,
          profile_image: "https://res.cloudinary.com/dmmd6fle7/image/upload/default_profile_p5rke8",
          is_staff: true,
        },
      })
    );
  }),
];
