
import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import Button from '../ui/Button';
import { Card, CardContent } from '../ui/Card';
import { BlogPost } from '../../types';
import Login from './Login';

const AdminDashboard: React.FC = () => {
  const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost, resetData, isDirty } = useData();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'posts' | 'media' | 'settings'>('posts');
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Suggested Unsplash images for the "Media" tab
  const mediaLibrary = [
    "https://images.unsplash.com/photo-1554224154-260327c00c40?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1565514020176-db792f9d5019?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=1200",
  ];

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPost) {
      if (isCreating) {
        addBlogPost(editingPost);
      } else {
        updateBlogPost(editingPost);
      }
      setEditingPost(null);
      setIsCreating(false);
    }
  };

  const startNewPost = () => {
    setEditingPost({
      id: Date.now().toString(),
      title: 'New Blog Post',
      slug: 'new-blog-post',
      date: new Date().toISOString().split('T')[0],
      excerpt: 'Enter a short summary...',
      content: '<p>Write your content here...</p>',
      imageUrl: mediaLibrary[0],
      keywords: ['ev charging'],
      altText: 'Description of main image',
      caption: 'Caption for the blog list view'
    });
    setIsCreating(true);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  };

  const exportData = () => {
    const data = JSON.stringify(blogPosts, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blog_posts.json';
    a.click();
  };

  return (
    <div className="min-h-screen bg-background text-gray-100 flex flex-col">
      {/* Admin Header */}
      <header className="bg-surface border-b border-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <i className="fa-solid fa-bolt text-secondary"></i>
           <span className="font-bold">CMS Admin</span>
        </div>
        <div className="flex gap-2">
           <Button variant="outline" size="sm" onClick={() => window.location.hash = ''}>View Site</Button>
           <Button variant="ghost" size="sm" onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-surface border-r border-gray-800 hidden md:block p-4">
          <nav className="space-y-2">
            <button 
              onClick={() => { setActiveTab('posts'); setEditingPost(null); }}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === 'posts' ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <i className="fa-solid fa-file-pen mr-2"></i> Blog Posts
            </button>
            <button 
              onClick={() => { setActiveTab('media'); setEditingPost(null); }}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === 'media' ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <i className="fa-solid fa-images mr-2"></i> Media Library
            </button>
            <button 
              onClick={() => { setActiveTab('settings'); setEditingPost(null); }}
              className={`w-full text-left px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800'}`}
            >
              <i className="fa-solid fa-gear mr-2"></i> Settings
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          
          {/* POSTS TAB */}
          {activeTab === 'posts' && !editingPost && (
            <div className="max-w-5xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Manage Posts</h1>
                <Button onClick={startNewPost}><i className="fa-solid fa-plus mr-2"></i> Add New</Button>
              </div>
              
              <div className="bg-surface rounded-lg border border-gray-800 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-gray-900/50 text-gray-400 text-sm">
                    <tr>
                      <th className="p-4">Title</th>
                      <th className="p-4">Date</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map(post => (
                      <tr key={post.id} className="border-t border-gray-800 hover:bg-gray-800/50">
                        <td className="p-4 font-medium">{post.title}</td>
                        <td className="p-4 text-gray-400 text-sm">{post.date}</td>
                        <td className="p-4 text-right space-x-2">
                          <button 
                            onClick={() => { setEditingPost(post); setIsCreating(false); }}
                            className="text-secondary hover:text-white"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </button>
                          <button 
                            onClick={() => { if(confirm('Delete this post?')) deleteBlogPost(post.id); }}
                            className="text-red-500 hover:text-red-400"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* EDIT FORM */}
          {editingPost && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <button onClick={() => setEditingPost(null)} className="text-gray-400 hover:text-white">
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <h1 className="text-2xl font-bold">{isCreating ? 'Create Post' : 'Edit Post'}</h1>
              </div>

              <form onSubmit={handleSave} className="space-y-6 bg-surface p-6 rounded-lg border border-gray-800">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Title</label>
                    <input 
                      className="w-full bg-background border border-gray-700 rounded p-2 text-white"
                      value={editingPost.title}
                      onChange={e => setEditingPost({...editingPost, title: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Slug (URL)</label>
                    <input 
                      className="w-full bg-background border border-gray-700 rounded p-2 text-white"
                      value={editingPost.slug}
                      onChange={e => setEditingPost({...editingPost, slug: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Date</label>
                    <input 
                      type="date"
                      className="w-full bg-background border border-gray-700 rounded p-2 text-white"
                      value={editingPost.date}
                      onChange={e => setEditingPost({...editingPost, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Main Image URL</label>
                    <input 
                      className="w-full bg-background border border-gray-700 rounded p-2 text-white"
                      value={editingPost.imageUrl}
                      onChange={e => setEditingPost({...editingPost, imageUrl: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Excerpt (Summary)</label>
                  <textarea 
                    className="w-full bg-background border border-gray-700 rounded p-2 text-white h-20"
                    value={editingPost.excerpt}
                    onChange={e => setEditingPost({...editingPost, excerpt: e.target.value})}
                  />
                </div>

                <div>
                   <label className="block text-sm text-gray-400 mb-1">Visible Caption</label>
                   <textarea 
                     className="w-full bg-background border border-gray-700 rounded p-2 text-white h-16"
                     value={editingPost.caption}
                     onChange={e => setEditingPost({...editingPost, caption: e.target.value})}
                   />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">Content (HTML allowed)</label>
                  <p className="text-xs text-gray-500 mb-2">Use &lt;p&gt;, &lt;h2&gt;, &lt;ul&gt; tags for formatting.</p>
                  <textarea 
                    className="w-full bg-background border border-gray-700 rounded p-2 text-white h-64 font-mono text-sm"
                    value={editingPost.content || ''}
                    onChange={e => setEditingPost({...editingPost, content: e.target.value})}
                  />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-gray-800">
                  <Button type="button" variant="ghost" onClick={() => setEditingPost(null)}>Cancel</Button>
                  <Button type="submit" variant="primary">Save Changes</Button>
                </div>
              </form>
            </div>
          )}

          {/* MEDIA TAB */}
          {activeTab === 'media' && (
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Media Library</h1>
              <p className="text-gray-400 mb-6">Click an image to copy its URL.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {mediaLibrary.map((url, idx) => (
                  <div key={idx} className="relative group cursor-pointer" onClick={() => copyToClipboard(url)}>
                    <img src={url} className="w-full h-40 object-cover rounded border border-gray-800 hover:border-secondary" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded">
                      <span className="text-white text-sm font-bold"><i className="fa-solid fa-copy"></i> Copy URL</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Settings & Tools</h1>
              
              <Card className="bg-surface border-gray-800 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">Data Management</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Your changes are currently saved in your browser's local storage. 
                    {isDirty ? <span className="text-primary ml-1">(You have unsaved changes!)</span> : <span className="text-green-500 ml-1">(Synced with defaults)</span>}
                  </p>
                  
                  <div className="flex flex-col gap-4">
                    <Button variant="outline" onClick={exportData}>
                      <i className="fa-solid fa-download mr-2"></i> Export JSON Data
                    </Button>
                    <p className="text-xs text-gray-500">Download the JSON file. A developer can paste this into `constants.ts` to make changes permanent for everyone.</p>
                    
                    <Button variant="ghost" className="text-red-500 hover:bg-red-900/20 hover:text-red-400" onClick={() => { if(confirm('Reset all data to defaults?')) resetData(); }}>
                      <i className="fa-solid fa-rotate-left mr-2"></i> Reset to Defaults
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
