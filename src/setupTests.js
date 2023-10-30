// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { handlers } from "./mocks/handlers";

// Mock ResizeObserver required by wavesurfer.js
// Solution from: https://stackoverflow.com/a/67006794
global.ResizeObserver = require("resize-observer-polyfill");

// Mock HTMLMediaElement prototype methods. Solution from:
// https://stackoverflow.com/questions/51829319/how-to-mock-video-pause-function-using-jest
jest.spyOn(window.HTMLMediaElement.prototype, "load").mockImplementation(() => {});
jest.spyOn(window.HTMLMediaElement.prototype, "play").mockImplementation(() => {});
jest.spyOn(window.HTMLMediaElement.prototype, "pause").mockImplementation(() => {});

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
