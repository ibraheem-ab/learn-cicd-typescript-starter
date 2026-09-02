import { describe, expect, test } from "vitest";

import { getAPIKey } from "../api/auth.js";

describe("getAPIKey", () => {
  test("returns null when the authorization header is missing", () => {
    expect(getAPIKey({})).toBeNull();
  });

  test("returns null for an unsupported authorization scheme", () => {
    expect(getAPIKey({ authorization: "Bearer secret-key" })).toBeNull();
  });

  test("returns the API key from a valid authorization header", () => {
    expect(getAPIKey({ authorization: "ApiKey secret-key" })).toBe(
      "secret-key",
    );
  });
});
