// src/pages/PostDetails.tsx
import { useState } from "react";
// import { Button } from "../components/ui/button";
// import { Textarea } from "../components/ui/textarea";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
// import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useBlogDetail } from "@/hooks/useBlogs";
import { useParams } from "react-router-dom";

// Static dummy data
const dummyPost = {
  id: 1,
  title: "The Future of Web Development",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

  ## Heading 2
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  
  - List item 1
  - List item 2
  - List item 3`,
  published_at: "2024-03-20T10:00:00Z",
  media_url:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  media_type: "image",
  likes_count: 42,
  comments_count: 3,
  read_time: 5,
  author: {
    name: "John Developer",
    avatar: "https://source.unsplash.com/random/100x100?avatar",
    bio: "Full-stack developer passionate about modern web technologies",
  },
  comments: [
    {
      id: 1,
      content: "Great post! Really enjoyed reading this.",
      created_at: "2024-03-20T11:00:00Z",
      user: {
        name: "Alice Smith",
        avatar: "https://source.unsplash.com/random/100x100?user1",
      },
    },
    {
      id: 2,
      content: "Looking forward to the next part!",
      created_at: "2024-03-20T12:00:00Z",
      user: {
        name: "Bob Johnson",
        avatar: "https://source.unsplash.com/random/100x100?user2",
      },
    },
  ],
  related_posts: [
    {
      id: 2,
      title: "Modern Frontend Architecture",
      published_at: "2024-03-19T09:00:00Z",
      thumbnail: "https://source.unsplash.com/random/200x200?code",
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      published_at: "2024-03-18T15:00:00Z",
      thumbnail: "https://source.unsplash.com/random/200x200?typescript",
    },
  ],
};

export function BlogDetails() {
  //   const [comment, setComment] = useState("");
  const [post] = useState(dummyPost); // Use static data
  //   const [likes, setLikes] = useState(post.likes_count);

  const { id } = useParams<{ id: string }>();
  const { data: blog, isLoading, isError } = useBlogDetail(id ?? "");

  if (!blog) return <div>No blog id provided</div>;
  if (isLoading) return <div>Loading post...</div>;
  if (isError) return <div>Error loading post</div>;

  //   const handleLike = () => {
  //     setLikes((prev) => prev + 1);
  //   };

  //   const handleCommentSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     if (comment.trim()) {
  //       const newComment = {
  //         id: Date.now(),
  //         content: comment,
  //         created_at: new Date().toISOString(),
  //         user: {
  //           name: "Current User",
  //           avatar: "https://source.unsplash.com/random/100x100?user3",
  //         },
  //       };
  //       post.comments.push(newComment);
  //       setComment("");
  //     }
  //   };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-8">
          {/* Main Content */}
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Post Header */}
            <header className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p>
                    {formatDate(blog.published_date)} • {post.read_time} min
                    read
                  </p>
                </div>
              </div>
            </header>

            {/* Media Content */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              {post.media_type === "video" ? (
                <video
                  controls
                  className="w-full h-full object-cover"
                  src={post.media_url}
                />
              ) : (
                <img
                  src={post.media_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Post Content */}
            <article className="prose dark:prose-invert max-w-none">
              {blog.content}
            </article>

            {/* Interaction Bar */}
            {/* <div className="flex items-center gap-6 border-t pt-6">
              <Button variant="ghost" onClick={handleLike}>
                <Heart className="w-5 h-5 mr-2" />
                {likes} Likes
              </Button>
              <Button variant="ghost">
                <MessageCircle className="w-5 h-5 mr-2" />
                {post.comments.length} Comments
              </Button>
              <Button variant="ghost">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
            </div> */}

            {/* Comments Section */}
            {/* <section className="space-y-8">
              <h2 className="text-2xl font-semibold">
                Comments ({post.comments.length})
              </h2>

              <form onSubmit={handleCommentSubmit} className="space-y-4">
                <Textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add a comment..."
                  rows={3}
                />
                <Button type="submit">Post Comment</Button>
              </form>

              <div className="space-y-6">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <Avatar>
                      <AvatarImage src={comment.user.avatar} />
                      <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{comment.user.name}</p>
                        <span className="text-sm text-muted-foreground">
                          {formatDate(comment.created_at)}
                        </span>
                      </div>
                      <p className="mt-2">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
