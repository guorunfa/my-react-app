import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
export const Route = createRootRoute({
    component: RootLayout,
})

function RootLayout() {
    return (
        <>
            <nav className="flex gap-4 p-4">
                <Link to="/">Home</Link>
                <Link to="/demo">Demo</Link>
                <Link to="/about">About</Link>
            </nav>
            <hr />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </>
    )
}
