import { StartupCardType } from "@/types";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const StartupCard = ({post}: { post: StartupCardType }) => {
  const { 
    _createdAt, 
    views, 
    author: { 
      _id: authorId, 
      name 
    }, 
    title, 
    description, 
    image, 
    category 
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1.5">
          <EyeIcon size={16} className="text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>  

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${authorId}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>          
        </div>
        <Link href={`/startup/${authorId}`}>
          <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full" />
        </Link>
      </div>

      <Link href={`/startup/${authorId}`}>
        <p className="mt-5 text-16-medium line-clamp-2">
          {description}
        </p>        
        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <div className="startup-card_btn">
          <Link href={`/startup/${authorId}`}>
            Details
          </Link>
        </div>
      </div>
    </li>
  )
}

export default StartupCard
