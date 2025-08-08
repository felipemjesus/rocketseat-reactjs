import { http, HttpResponse } from 'msw'
import type { SignInBody } from '../sign-in'

export const signInMock = http.post<never, SignInBody>(
  '/authenticate',
  async ({ request }) => {
    const { email } = await request.json()

    if (email === 'johndoe@example.com') {
      return new HttpResponse(null, {
        status: 200,
        headers: {
          'Set-Cookie': 'token=sample-token',
        },
      })
    }

    return new HttpResponse(null, { status: 401 })
  }
)
