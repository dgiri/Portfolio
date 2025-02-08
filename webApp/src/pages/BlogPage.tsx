import { usePublishedBlogs } from "@/hooks/useBlogs";
import Wip from "@/components/Wip";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const BlogPage = () => {
  const { data: blogs, isLoading, isError } = usePublishedBlogs();
  const { user } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [tags, setTags] = useState("");

  const handleCreatePost = () => {
    console.log("create post");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="mx-auto w-full max-w-screen-xl px-6 md:px-20 mb-16 mt-8 sm:mt-16 flex flex-col items-center justify-center text-center">
            <Wip
              title="This page is currently under construction"
              description="We're working hard to bring you an amazing blog page. Check back soon to learn more about our story, mission, and team."
            />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading blogs</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pt-16">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2">Posts</h1>
        <p className="text-lg mb-8">A collection of thoughts and ideas.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((blog) => (
            <article
              key={blog.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {blog.coverImage && (
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400">
                  {blog.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {blog.content}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(blog.published_date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <Link
                    to={`/blogs/${blog.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogContent className="sm:max-w-[425px] dark:bg-gray-900">
            <DialogHeader>
              <DialogTitle>Create Blog Post</DialogTitle>
              <DialogDescription>
                Fill in the details for your new blog post.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter blog title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your blog content..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={8}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="coverImage">Cover Image</Label>
                <Input
                  id="coverImage"
                  placeholder="Enter cover image URL"
                  value={coverImage}
                  onChange={(e) => setCoverImage(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="Enter tags separated by commas"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
                <p className="text-sm text-muted-foreground">
                  Separate multiple tags with commas (e.g. technology, coding,
                  web)
                </p>
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsCreateModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreatePost}>Create Post</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {user?.isAdmin && (
          <Button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-lg hover:shadow-xl"
            onClick={() => setIsCreateModalOpen(true)}
          >
            <Plus className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
