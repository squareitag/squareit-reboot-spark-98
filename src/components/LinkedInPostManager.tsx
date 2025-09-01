import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Edit, Plus, Trash2, Save } from "lucide-react";

interface LinkedInPost {
  id: string;
  author: string;
  authorImage: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  postUrl: string;
}

const STORAGE_KEY = 'linkedin-posts';

export default function LinkedInPostManager() {
  const [posts, setPosts] = useState<LinkedInPost[]>([]);
  const [editingPost, setEditingPost] = useState<LinkedInPost | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<Partial<LinkedInPost>>({
    author: "Square IT AG",
    authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
    content: "",
    image: "",
    likes: 0,
    comments: 0,
    shares: 0,
    timestamp: "",
    postUrl: "#"
  });

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem(STORAGE_KEY);
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Initialize with default posts if no saved data
      const defaultPosts: LinkedInPost[] = [
        {
          id: "1",
          author: "Square IT AG",
          authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
          content: "🚀 Excited to announce our latest Microsoft 365 migration project! We've successfully helped another client transition to the cloud, improving their productivity by 40%. #Microsoft365 #DigitalTransformation #SquareIT",
          likes: 24,
          comments: 8,
          shares: 3,
          timestamp: "2 Tage",
          postUrl: "#"
        },
        {
          id: "2",
          author: "Square IT AG",
          authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
          content: "💡 Cybersecurity Tip: Regular security audits are crucial for maintaining a robust defense against evolving threats. Our team conducts comprehensive security analyses to identify vulnerabilities before they become problems. Stay safe! 🛡️ #Cybersecurity #ITSecurity",
          likes: 31,
          comments: 12,
          shares: 7,
          timestamp: "1 Woche",
          postUrl: "#"
        },
        {
          id: "3",
          author: "Square IT AG",
          authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
          content: "🌟 Proud to be Microsoft Partner! Our Azure migration services are helping businesses scale efficiently while reducing costs. Cloud adoption is not just a trend - it's the future of business operations. #Azure #CloudMigration #Microsoft",
          likes: 45,
          comments: 15,
          shares: 12,
          timestamp: "2 Wochen",
          postUrl: "#"
        }
      ];
      setPosts(defaultPosts);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    }
  }, []);

  const savePosts = (updatedPosts: LinkedInPost[]) => {
    setPosts(updatedPosts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
  };

  const handleSave = () => {
    if (!formData.content?.trim()) {
      toast({
        title: "Error",
        description: "Post content is required",
        variant: "destructive"
      });
      return;
    }

    if (editingPost) {
      // Update existing post
      const updatedPosts = posts.map(post => 
        post.id === editingPost.id 
          ? { ...editingPost, ...formData }
          : post
      );
      savePosts(updatedPosts);
      setEditingPost(null);
      toast({
        title: "Success",
        description: "Post updated successfully"
      });
    } else {
      // Add new post
      const newPost: LinkedInPost = {
        id: Date.now().toString(),
        ...formData as LinkedInPost
      };
      const updatedPosts = [newPost, ...posts];
      savePosts(updatedPosts);
      setIsAddingNew(false);
      toast({
        title: "Success",
        description: "New post added successfully"
      });
    }

    // Reset form
    setFormData({
      author: "Square IT AG",
      authorImage: "/lovable-uploads/49070c3a-774e-4906-b38c-3321a301b6c3.png",
      content: "",
      image: "",
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: "",
      postUrl: "#"
    });
  };

  const handleDelete = (postId: string) => {
    const updatedPosts = posts.filter(post => post.id !== postId);
    savePosts(updatedPosts);
    toast({
      title: "Success",
      description: "Post deleted successfully"
    });
  };

  const startEditing = (post: LinkedInPost) => {
    setEditingPost(post);
    setFormData(post);
  };

  const PostForm = () => (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium">Content</label>
        <Textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Post content..."
          className="min-h-32"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Timestamp</label>
          <Input
            value={formData.timestamp}
            onChange={(e) => setFormData({ ...formData, timestamp: e.target.value })}
            placeholder="e.g., 2 Tage, 1 Woche"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium">Post URL</label>
          <Input
            value={formData.postUrl}
            onChange={(e) => setFormData({ ...formData, postUrl: e.target.value })}
            placeholder="LinkedIn post URL"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Image URL (optional)</label>
        <Input
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="Image URL"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-medium">Likes</label>
          <Input
            type="number"
            value={formData.likes}
            onChange={(e) => setFormData({ ...formData, likes: parseInt(e.target.value) || 0 })}
          />
        </div>
        
        <div>
          <label className="text-sm font-medium">Comments</label>
          <Input
            type="number"
            value={formData.comments}
            onChange={(e) => setFormData({ ...formData, comments: parseInt(e.target.value) || 0 })}
          />
        </div>
        
        <div>
          <label className="text-sm font-medium">Shares</label>
          <Input
            type="number"
            value={formData.shares}
            onChange={(e) => setFormData({ ...formData, shares: parseInt(e.target.value) || 0 })}
          />
        </div>
      </div>

      <Button onClick={handleSave} className="w-full">
        <Save className="w-4 h-4 mr-2" />
        {editingPost ? "Update Post" : "Add Post"}
      </Button>
    </div>
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">LinkedIn Posts Manager</h1>
        <Dialog open={isAddingNew} onOpenChange={setIsAddingNew}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New LinkedIn Post</DialogTitle>
            </DialogHeader>
            <PostForm />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="relative">
            <div className="absolute top-4 right-4 flex gap-2">
              <Dialog open={editingPost?.id === post.id} onOpenChange={(open) => !open && setEditingPost(null)}>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => startEditing(post)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Edit LinkedIn Post</DialogTitle>
                  </DialogHeader>
                  <PostForm />
                </DialogContent>
              </Dialog>
              
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleDelete(post.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>

            <CardHeader className="pr-20">
              <div className="flex items-center gap-3">
                <img 
                  src={post.authorImage} 
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-contain bg-white p-1"
                />
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="mb-4 whitespace-pre-wrap">{post.content}</p>
              
              {post.image && (
                <img 
                  src={post.image} 
                  alt="Post content"
                  className="w-full rounded-lg mb-4 object-cover max-h-96"
                />
              )}
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t">
                <span>👍 {post.likes} likes</span>
                <span>💬 {post.comments} comments</span>
                <span>🔄 {post.shares} shares</span>
                {post.postUrl !== "#" && (
                  <a 
                    href={post.postUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on LinkedIn
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}