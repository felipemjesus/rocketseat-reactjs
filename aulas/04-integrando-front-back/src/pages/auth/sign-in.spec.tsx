import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SignIn } from "./sign-in"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"

describe('NavLink', () => {
  it('should set default email input value if email es present on search params', () => {
    const wrapper = render(
      <SignIn />,
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/sign-in?email=johndoe@example.com']}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </MemoryRouter>
        )
      }
    )

    const emailInput = wrapper.getByLabelText('E-mail') as HTMLInputElement

    expect(emailInput.value).toBe('johndoe@example.com')
  })
})
