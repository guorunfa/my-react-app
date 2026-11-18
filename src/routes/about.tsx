import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter()
    const goHome = () =>
        router.navigate({
            to: '/',
        })
    return (
        <div className="flex flex-col items-center justify-center">
            <h1>about</h1>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer w-30 flex items-center"
                onClick={goHome}
            >
                <div>Go Home</div>
            </button>
        </div>
    )
}
