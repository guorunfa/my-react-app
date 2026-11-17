import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootLayout,
})

function RootLayout() {
    return (
        <>
            <nav className="flex gap-4 p-4">
                <Link to="/">Home</Link>
                <Link to="/demo">Demo</Link>
            </nav>
            <hr />
            <Outlet />
        </>
    )
}
