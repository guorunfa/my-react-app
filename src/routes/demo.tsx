import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demo')({
    component: Demo,
})

function Demo() {
    return (
        <div>
            <h1>Demo</h1>
        </div>
    )
}
