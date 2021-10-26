import { renderHook, act } from "@testing-library/react-hooks";
import { mocked } from "ts-jest/utils";
import { signInAsync } from "expo-apple-authentication";
import { AuthProvider, useAuth } from "./auth";

jest.mock("expo-apple-authentication");

describe("Auth Hook", () => {
  it("should be able to sign in with Apple account existing", async () => {
    const appleMocked = mocked(signInAsync as any);
    appleMocked.mockReturnValue({
      authorizationCode: "123",
      email: "test@email.com",
      fullName: {
        givenName: "Test",
      },
      photo: "any_photo.png",
    });

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(() => result.current.signInWithApple());

    expect(result.current.user.email).toBe("test@email.com");
  });

  it("user should not connect if cancel authentication with Apple account", async () => {
    const appleMocked = mocked(signInAsync as any);
    appleMocked.mockReturnValue({});

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(() => result.current.signInWithApple());

    expect(result.current.user).not.toHaveProperty("id");
  });
});
