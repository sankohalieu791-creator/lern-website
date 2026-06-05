import React, { useState } from 'react';
import '../styles/Feed.css';

export const Feed = () => {
  const [videos] = useState([
    {
      id: 1,
      tag: 'TYPESCRIPT',
      duration: '12:30',
      title: 'TypeScript in production React — the patterns I use daily',
      instructor: 'Dr. Maya Chen',
      bio: 'TypeScript & React Patterns',
      likes: 1200,
      isLiked: false,
      comments: 45,
      views: 182000,
      thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=500&fit=crop',
      badge: 'VERIFIED SKILL',
    },
    {
      id: 2,
      tag: 'FITNESS',
      duration: '8:45',
      title: 'Why your squat hits a wall — mobility fix',
      instructor: 'Maya Bennett',
      bio: 'Mobility & Strength',
      likes: 890,
      isLiked: false,
      comments: 32,
      views: 156000,
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop',
    },
  ]);

  const [videosList, setVideosList] = useState(videos);

  const toggleLike = (id) => {
    setVideosList(videosList.map(v => 
      v.id === id ? { ...v, isLiked: !v.isLiked, likes: v.isLiked ? v.likes - 1 : v.likes + 1 } : v
    ));
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <button className="create-post-btn">
          <span className="plus-icon">+</span> Create Post
        </button>
        <div className="header-icons">
          <button className="header-icon search-icon">🔍</button>
          <button className="header-icon notification-icon">🔔</button>
        </div>
      </div>

      <div className="videos-feed">
        {videosList.map((video) => (
          <div key={video.id} className="video-card">
            <div className="video-container">
              <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
              <div className="video-overlay">
                <span className="play-icon">▶</span>
              </div>
              <span className="video-tag">{video.tag}</span>
              <span className="video-duration">{video.duration}</span>
            </div>

            <div className="video-info">
              <div className="instructor-info">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${video.instructor}`}
                  alt={video.instructor}
                  className="instructor-avatar"
                />
                <div className="instructor-details">
                  <p className="instructor-name">{video.instructor}</p>
                  <p className="instructor-bio">{video.bio}</p>
                </div>
                <button className="follow-btn">Follow</button>
              </div>

              <h3 className="video-title">{video.title}</h3>
              <p className="video-description">{video.title}</p>

              <div className="video-stats">
                <span className="stat">👁 {(video.views / 1000).toFixed(0)}K views</span>
                <span className="stat">⏱ {video.duration}</span>
              </div>

              <div className="video-actions">
                <button 
                  className={`action-btn like-btn ${video.isLiked ? 'liked' : ''}`}
                  onClick={() => toggleLike(video.id)}
                  title="Like"
                >
                  <span className="like-icon">{video.isLiked ? '👍' : '👎'}</span>
                  <span className="action-count">{video.likes}</span>
                </button>
                <button className="action-btn comment-btn">
                  <span className="comment-icon">💬</span>
                  <span className="action-count">{video.comments}</span>
                </button>
                <button className="action-btn share-btn">
                  <span className="share-icon">↗</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
