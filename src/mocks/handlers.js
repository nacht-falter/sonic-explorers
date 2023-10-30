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
  rest.post(`${baseURL}sounds/`, (req, res, ctx) => {
    return res(ctx.status(400));
  }),
  rest.get(`${baseURL}sounds/1`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        owner: "testuser",
        title: "Test sound",
        description: "Test description",
        tags: ["tag1", "tag2"],
        image: "test.jpg",
        latitude: 123.123,
        longitude: 123.123,
        is_owner: true,
      })
    );
  }),
  rest.put(`${baseURL}sounds/1`, (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        owner: "testuser",
        title: "Test sound",
        description: "Test description",
        tags: ["tag1", "tag2"],
        image: "test.jpg",
        latitude: 123.123,
        longitude: 123.123,
        is_owner: true,
      })
    );
  }),
  rest.get(`${baseURL}sounds/`, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 2,
        next: "https://sonic-explorers-api-4c187c4cd99f.herokuapp.com/sounds/?page=2",
        previous: null,
        results: [
          {
            id: 1,
            owner: "testuser",
            title: "Test sound 1",
            description: "Test description 1",
            tags: ["tag1", "tag2"],
            image: "test1.jpg",
            latitude: 123.123,
            longitude: 123.123,
            is_owner: true,
          },
          {
            id: 2,
            owner: "testuser",
            title: "Test sound 2",
            description: "Test description 2",
            tags: ["tag3", "tag4"],
            image: "test2.jpg",
            latitude: 123.123,
            longitude: 123.123,
            is_owner: true,
          },
        ],
      })
    );
  }),
  rest.get(`${baseURL}profiles/`, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 2,
        next: "https://sonic-explorers-api-4c187c4cd99f.herokuapp.com/profiles/?page=2",
        previous: null,
        results: [
          {
            id: 1,
            owner: "testuser1",
            avatar: "https://res.cloudinary.com/dmmd6fle7/image/upload/default_profile_p5rke8",
          },
          {
            id: 2,
            owner: "testuser2",
            avatar: "https://res.cloudinary.com/dmmd6fle7/image/upload/default_profile_p5rke8",
          },
        ],
      })
    );
  }),
];
