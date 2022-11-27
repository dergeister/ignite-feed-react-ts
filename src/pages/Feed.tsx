import { Post } from "../components/Post/Post";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { IFeedProps } from "../types/FeedProps.interface";

import  styles from './Feed.module.css';

const posts = [
  {
    id: 1,
    author: {
      name: "Nicolas Hoffmann",
      role: "Frontend Dev",
      avatarUrl: "https://github.com/dergeister.png",
    },
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aut soluta eligendi dignissimos ipsam quasi qui fugit minima ex saepe.",
    publishedAt: new Date('2022-11-22 10:24:00'),
    comments: [
      {
        id: 1,
        author: {
          name: "Kommen Thador",
          role: "Commentator",
          avatarUrl: "https://picsum.photos/200",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, totam.",
        publishedAt: new Date('2022-11-22 11:02:00'),
        applauseCount: 0,
      },
      {
        id: 2,
        author: {
          name: "Kommen Thador",
          role: "Commentator",
          avatarUrl: "https://picsum.photos/200",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, totam.",
        publishedAt: new Date('2022-11-24 22:31:00'),
        applauseCount: 0,
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Allan Nubling",
      role: "Tech Lead",
      avatarUrl: "https://github.com/allan-nubling.png",
    },
    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non unde voluptatem adipisci laudantium molestias voluptas magni repudiandae blanditiis ipsam odit iusto, ullam porro eveniet tempore?",
    publishedAt: new Date('2022-11-23 16:37:00'),
    comments: [
      {
        id: 1,
        author: {
          name: "Kommen Thador",
          role: "Commentator",
          avatarUrl: "https://picsum.photos/200",
        },
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam soluta perspiciatis at.",
        publishedAt: new Date('2022-11-23 17:41:00'),
        applauseCount: 1,
      }
    ]
  },
];

export function Feed(props: IFeedProps) {
  return (
    <div className={styles.wrapper}>
      <Sidebar user={props.user} onLogout={props.onLogout} />
      <main>
        {
          posts.map(post => {
            return (
              <Post
                key={`post-${post.id}`}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                comments={post.comments}
              />
            )
          })
        }
      </main>
    </div>
  );
}