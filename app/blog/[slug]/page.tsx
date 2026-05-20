"use client";

import { useState } from "react";
import { blogPosts } from "@/app/lib/data";
import { ArrowLeft, Clock, Calendar, User, Heart, MessageCircle, Send, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/app/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 15);
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, author: "Sarah J.", content: "Extremely helpful article, the section on automation is a game changer!", date: "2 days ago" },
    { id: 2, author: "Michael R.", content: "I've been using Tailwind for a year but learned some new tricks here. Thanks!", date: "1 day ago" },
  ]);

  const handleLike = () => {
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    setIsLiked(!isLiked);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment = {
      id: Date.now(),
      author: "You",
      content: newComment,
      date: "Just now"
    };
    
    setComments([comment, ...comments]);
    setNewComment("");
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24">
      <SectionWrapper>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Functional Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog Page
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-border">
              <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</div>
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</div>
            </div>

            <div className="prose prose-invert max-w-none mb-16">
              <p className="text-xl leading-relaxed text-muted-foreground whitespace-pre-line">
                {post.fullContent}
              </p>
            </div>

            {/* Interaction Bar */}
            <div className="flex items-center justify-between py-6 border-y border-border mb-16">
              <div className="flex items-center gap-8">
                <button 
                  onClick={handleLike}
                  className={`flex items-center gap-2 transition-all ${isLiked ? 'text-red-500 scale-110' : 'text-muted-foreground hover:text-primary'}`}
                >
                  <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                  <span className="font-bold">{likes}</span>
                </button>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-bold">{comments.length}</span>
                </div>
              </div>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Comments Section */}
            <div className="space-y-10">
              <h3 className="text-2xl font-bold">Discussion</h3>
              
              <form onSubmit={handleCommentSubmit} className="relative">
                <Input 
                  placeholder="Write a comment..." 
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="pr-12 bg-card/50 h-14 rounded-2xl border-border focus:border-primary/50"
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 bg-primary text-primary-foreground rounded-xl hover:brightness-110 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="space-y-6">
                {comments.map((comment) => (
                  <motion.div 
                    key={comment.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 rounded-2xl bg-card/50 border border-border"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">
                          {comment.author[0]}
                        </div>
                        <span className="font-bold text-sm">{comment.author}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{comment.date}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {comment.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  );
}