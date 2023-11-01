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
        next: null,
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
  rest.get(`${baseURL}comments/`, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            id: 2,
            owner: "testuser",
            sound: 1,
            content: "Test comment 1",
            is_owner: true,
          },
          {
            id: 1,
            owner: "testuser",
            sound: 1,
            content: "Test comment 2",
            is_owner: true,
          },
        ],
      })
    );
  }),
  rest.get(`${baseURL}notifications/`, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            id: 1,
            owner: "testuser",
            sender: "testuser2",
            is_read: false,
            title: "Test like notification",
            content: "Test like notification content",
            category: "like",
          },
          {
            id: 2,
            owner: "testuser",
            sender: "testuser2",
            is_read: true,
            title: "Test comment notification",
            content: "Test comment notification content",
            category: "comment",
          },
          {
            id: 3,
            owner: "testuser",
            sender: "testuser2",
            is_read: false,
            title: "Test sound notification",
            content: "Test sound notification content",
            category: "sound",
          },
          {
            id: 4,
            owner: "testuser",
            sender: "testuser2",
            is_read: true,
            title: "Test follow notification",
            content: "Test follow notification content",
            category: "follow",
          },
          {
            id: 5,
            owner: "testuser",
            sender: "testuser2",
            is_read: false,
            title: "Test report notification",
            content: "Test report notification content",
            category: "report",
          },
        ],
      })
    );
  }),
  rest.get(`${baseURL}reports/`, (req, res, ctx) => {
    return res(
      ctx.json({
        count: 2,
        next: null,
        previous: null,
        results: [
          {
            id: 1,
            owner: "testuser",
            sound: 1,
            flag: "hate",
            content: "Test Hate speech report",
            is_owner: true,
            review_status: "open",
          },
          {
            id: 2,
            owner: "testuser",
            sound: 1,
            flag: "illegal",
            content: "Test Illegal/extremist content report",
            review_status: "open",
          },
          {
            id: 3,
            owner: "testuser",
            sound: 1,
            flag: "violence",
            content: "Test Violent content report",
            review_status: "open",
          },
          {
            id: 4,
            owner: "testuser",
            sound: 1,
            flag: "pornographic",
            content: "Test Pornographic Content report",
            review_status: "open",
          },
          {
            id: 5,
            owner: "testuser",
            sound: 1,
            flag: "harassment",
            content: "Test Harassment or bullying report",
            review_status: "closed",
          },
          {
            id: 6,
            owner: "testuser",
            sound: 1,
            flag: "privacy",
            content: "Test Privacy violation report",
            review_status: "closed",
          },
          {
            id: 7,
            owner: "testuser",
            sound: 1,
            flag: "property",
            content: "Test Intellectual property violation report",
            review_status: "closed",
          },
          {
            id: 8,
            owner: "testuser",
            sound: 1,
            flag: "other",
            content: "Test Other report",
            review_status: "closed",
          },
        ],
      })
    );
  }),
];
