import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps {
    id: string;
    title: string;
}

export const Board = ({ id, title }: BoardProps) => {
    const deleteBoardWithId = deleteBoard.bind(null, id)

    return (
        <form className="flex gap-x-2 items-center" action={deleteBoardWithId} key={id}>
            <p>
            Board name: {title}
            </p>
            <Button size="sm" type="submit" variant="destructive">
                Delete
            </Button> 
        </form>
    )
}