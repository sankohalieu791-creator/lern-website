'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import VideoCard from '@/components/Feed/VideoCard'
import CreatePost from '@/components/Feed/CreatePost'

export default function Feed() {
  const [videos, setVideos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async () => {
    const { data, error } = await supabase
      .from('videos')
      .select('*, user:users(username, avatar_url)')
      .order('created_at', { ascending: false })
      .limit(20)

    if (!error) setVideos(data || [])
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto pt-20">
      <div className="sticky top-20 bg-[#0a0a0a] z-30 py-4 border-b border-gray-800">
        <CreatePost onPostCreated={fetchVideos} />
      </div>

      <div className="space-y-4 px-4">
        {loading ? (
          <p className="text-center text-gray-500">Loading videos...</p>
        ) : videos.length === 0 ? (
          <p className="text-center text-gray-500">No videos yet</p>
        ) : (
          videos.map((video) => <VideoCard key={video.id} video={video} />)
        )}
      </div>
    </div>
  )
}