import { StartupCardType } from "@/types";

const StartupCard = ({post}: { post: StartupCardType }) => {
  return (
    <div>
      StartupCard {post.title}
    </div>
  )
}

export default StartupCard
