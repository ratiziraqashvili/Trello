import { Separator } from "@/components/ui/separator"
import { Info } from "lucide-react"
import { ActivityList } from "./_components/activity-list"
import { Suspense } from "react"

const ActivityPage = () => {
    return (
        <div className="w-full">
            <div className="flex gap-2">
            <Info />
            <span className="text-neutral-700">Activity</span>
            </div>
            <Separator className="my-2" />
            <Suspense fallback={<ActivityList.Skeleton />}>
            <ActivityList />
            </Suspense>
        </div>
    )
}

export default ActivityPage