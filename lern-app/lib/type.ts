export interface Profile {
  id: string
  email: string
  username: string
  full_name?: string
  avatar_url?: string
  bio?: string
  title?: string
  location?: string
  is_instructor: boolean
  followers_count: number
  following_count: number
  created_at: string
}

export interface Video {
  id: string
  user_id: string
  title: string
  description?: string
  video_url: string
  thumbnail_url?: string
  duration: number
  subject?: string
  likes_count: number
  comments_count: number
  views: number
  created_at: string
  user?: Pick<Profile, 'id' | 'username' | 'avatar_url' | 'is_instructor'>
}

export interface Comment {
  id: string
  video_id: string
  user_id: string
  text: string
  created_at: string
  user?: Pick<Profile, 'username' | 'avatar_url'>
}

export interface Course {
  id: string
  instructor_id: string
  title: string
  description?: string
  thumbnail_url?: string
  level: 'beginner' | 'intermediate' | 'advanced'
  subject?: string
  duration_minutes: number
  sessions_count: number
  enrollment_count: number
  rating: number
  price: number
  has_certificate: boolean
  created_at: string
  instructor?: Pick<Profile, 'id' | 'username' | 'avatar_url' | 'full_name'>
  sessions?: CourseSession[]
}

export interface CourseSession {
  id: string
  course_id: string
  title: string
  session_date: string
  duration_minutes: number
  is_final_project: boolean
}

export interface Project {
  id: string
  user_id: string
  course_id?: string
  title: string
  description?: string
  write_up?: string
  status: 'submitted' | 'approved' | 'needs_work'
  visibility: 'private' | 'public'
  instructor_feedback?: string
  attachments: string[]
  created_at: string
  user?: Pick<Profile, 'username' | 'avatar_url' | 'full_name'>
  course?: Pick<Course, 'title' | 'subject' | 'instructor_id'>
}

export interface LiveStream {
  id: string
  instructor_id: string
  title: string
  description?: string
  thumbnail_url?: string
  subject?: string
  is_live: boolean
  viewers_count: number
  stream_url?: string
  created_at: string
  instructor?: Pick<Profile, 'id' | 'username' | 'avatar_url' | 'full_name'>
}

export interface Workshop {
  id: string
  instructor_id: string
  title: string
  description?: string
  thumbnail_url?: string
  type: 'workshop' | 'event'
  event_date: string
  duration_minutes: number
  location?: string
  is_online: boolean
  price: number
  max_participants: number
  enrolled_count: number
  created_at: string
  instructor?: Pick<Profile, 'username' | 'avatar_url' | 'full_name'>
}

export interface Mentor {
  id: string
  user_id: string
  specialty: string
  bio?: string
  type: 'mentor' | 'coach' | 'tutor' | 'professor' | 'teacher'
  badge?: string
  rating: number
  followers_count: number
  created_at: string
  user?: Pick<Profile, 'id' | 'username' | 'avatar_url' | 'full_name' | 'location'>
}

export interface LiveMessage {
  id: string
  stream_id: string
  user_id: string
  text: string
  created_at: string
  user?: Pick<Profile, 'username' | 'avatar_url'>
}
