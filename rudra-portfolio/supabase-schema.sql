-- Run this in Supabase SQL Editor to set up the database

-- Profile table (single row)
CREATE TABLE profile (
  id INTEGER PRIMARY KEY DEFAULT 1,
  name TEXT DEFAULT 'MD Mahmudul Hasan Rudra',
  title TEXT DEFAULT 'System & Network Engineer | IT Support | Android Developer',
  bio TEXT DEFAULT '',
  email TEXT DEFAULT 'mhrudra064@gmail.com',
  phone TEXT DEFAULT '+880 1915 266658',
  location TEXT DEFAULT 'Narayanganj, Dhaka, Bangladesh',
  avatar_url TEXT DEFAULT '',
  resume_url TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Services
CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  icon TEXT DEFAULT 'bi-gear',
  tags TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Skills
CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  icon TEXT DEFAULT 'bi-code',
  tags TEXT[] DEFAULT '{}',
  width INTEGER DEFAULT 80,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Experiences
CREATE TABLE experiences (
  id SERIAL PRIMARY KEY,
  role TEXT NOT NULL,
  company TEXT DEFAULT '',
  period TEXT DEFAULT '',
  description TEXT DEFAULT '',
  tags TEXT[] DEFAULT '{}',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects
CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  category TEXT DEFAULT 'android',
  image_url TEXT DEFAULT '',
  tags TEXT[] DEFAULT '{}',
  project_url TEXT DEFAULT '',
  github_url TEXT DEFAULT '',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Testimonials
CREATE TABLE testimonials (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT DEFAULT '',
  quote TEXT DEFAULT '',
  avatar_url TEXT DEFAULT '',
  rating INTEGER DEFAULT 5,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog posts
CREATE TABLE blogs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  content TEXT DEFAULT '',
  category TEXT DEFAULT 'Technology',
  image_url TEXT DEFAULT '',
  date TEXT DEFAULT '',
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- YouTube videos
CREATE TABLE youtube_videos (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT DEFAULT '',
  video_url TEXT DEFAULT '',
  thumbnail_url TEXT DEFAULT '',
  views TEXT DEFAULT '0',
  duration TEXT DEFAULT '',
  is_featured BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default profile
INSERT INTO profile (id, name, title, bio, email, phone, location)
VALUES (1, 'MD Mahmudul Hasan Rudra', 'System & Network Engineer | IT Support | Android Developer',
  'A results-driven IT Professional with 4+ years of hands-on experience in network administration, system support, SaaS platforms, and technical troubleshooting.',
  'mhrudra064@gmail.com', '+880 1915 266658', 'Narayanganj, Dhaka, Bangladesh')
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security
ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE youtube_videos ENABLE ROW LEVEL SECURITY;

-- Public read access policies
CREATE POLICY "Public profiles are viewable by everyone" ON profile FOR SELECT USING (true);
CREATE POLICY "Public services are viewable by everyone" ON services FOR SELECT USING (true);
CREATE POLICY "Public skills are viewable by everyone" ON skills FOR SELECT USING (true);
CREATE POLICY "Public experiences are viewable by everyone" ON experiences FOR SELECT USING (true);
CREATE POLICY "Public projects are viewable by everyone" ON projects FOR SELECT USING (true);
CREATE POLICY "Public testimonials are viewable by everyone" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public blogs are viewable by everyone" ON blogs FOR SELECT USING (true);
CREATE POLICY "Public youtube videos are viewable by everyone" ON youtube_videos FOR SELECT USING (true);

-- Authenticated admin write policies
CREATE POLICY "Admin can insert profile" ON profile FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update profile" ON profile FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can insert services" ON services FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update services" ON services FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can delete services" ON services FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can insert skills" ON skills FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update skills" ON skills FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can delete skills" ON skills FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can insert experiences" ON experiences FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update experiences" ON experiences FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can delete experiences" ON experiences FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can insert projects" ON projects FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update projects" ON projects FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can delete projects" ON projects FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can insert testimonials" ON testimonials FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update testimonials" ON testimonials FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can delete testimonials" ON testimonials FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can insert blogs" ON blogs FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update blogs" ON blogs FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can delete blogs" ON blogs FOR DELETE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can insert youtube_videos" ON youtube_videos FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Admin can update youtube_videos" ON youtube_videos FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Admin can delete youtube_videos" ON youtube_videos FOR DELETE USING (auth.role() = 'authenticated');
