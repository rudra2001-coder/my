import { supabase } from '../supabaseClient'

export const profileApi = {
  get: async () => {
    const { data } = await supabase.from('profile').select('*').single()
    return data
  },
  update: async (data) => {
    const { error } = await supabase.from('profile').update(data).eq('id', 1)
    if (error) throw error
  }
}

export const servicesApi = {
  list: async () => {
    const { data } = await supabase.from('services').select('*').order('order_index')
    return data || []
  },
  create: async (data) => {
    const { error } = await supabase.from('services').insert(data)
    if (error) throw error
  },
  update: async (id, data) => {
    const { error } = await supabase.from('services').update(data).eq('id', id)
    if (error) throw error
  },
  delete: async (id) => {
    const { error } = await supabase.from('services').delete().eq('id', id)
    if (error) throw error
  }
}

export const skillsApi = {
  list: async () => {
    const { data } = await supabase.from('skills').select('*').order('order_index')
    return data || []
  },
  create: async (data) => {
    const { error } = await supabase.from('skills').insert(data)
    if (error) throw error
  },
  update: async (id, data) => {
    const { error } = await supabase.from('skills').update(data).eq('id', id)
    if (error) throw error
  },
  delete: async (id) => {
    const { error } = await supabase.from('skills').delete().eq('id', id)
    if (error) throw error
  }
}

export const experiencesApi = {
  list: async () => {
    const { data } = await supabase.from('experiences').select('*').order('order_index')
    return data || []
  },
  create: async (data) => {
    const { error } = await supabase.from('experiences').insert(data)
    if (error) throw error
  },
  update: async (id, data) => {
    const { error } = await supabase.from('experiences').update(data).eq('id', id)
    if (error) throw error
  },
  delete: async (id) => {
    const { error } = await supabase.from('experiences').delete().eq('id', id)
    if (error) throw error
  }
}

export const projectsApi = {
  list: async () => {
    const { data } = await supabase.from('projects').select('*').order('order_index')
    return data || []
  },
  create: async (data) => {
    const { error } = await supabase.from('projects').insert(data)
    if (error) throw error
  },
  update: async (id, data) => {
    const { error } = await supabase.from('projects').update(data).eq('id', id)
    if (error) throw error
  },
  delete: async (id) => {
    const { error } = await supabase.from('projects').delete().eq('id', id)
    if (error) throw error
  }
}

export const testimonialsApi = {
  list: async () => {
    const { data } = await supabase.from('testimonials').select('*').order('order_index')
    return data || []
  },
  create: async (data) => {
    const { error } = await supabase.from('testimonials').insert(data)
    if (error) throw error
  },
  update: async (id, data) => {
    const { error } = await supabase.from('testimonials').update(data).eq('id', id)
    if (error) throw error
  },
  delete: async (id) => {
    const { error } = await supabase.from('testimonials').delete().eq('id', id)
    if (error) throw error
  }
}

export const blogsApi = {
  list: async () => {
    const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false })
    return data || []
  },
  create: async (data) => {
    const { error } = await supabase.from('blogs').insert(data)
    if (error) throw error
  },
  update: async (id, data) => {
    const { error } = await supabase.from('blogs').update(data).eq('id', id)
    if (error) throw error
  },
  delete: async (id) => {
    const { error } = await supabase.from('blogs').delete().eq('id', id)
    if (error) throw error
  }
}

export const youtubeApi = {
  list: async () => {
    const { data } = await supabase.from('youtube_videos').select('*').order('order_index')
    return data || []
  },
  create: async (data) => {
    const { error } = await supabase.from('youtube_videos').insert(data)
    if (error) throw error
  },
  update: async (id, data) => {
    const { error } = await supabase.from('youtube_videos').update(data).eq('id', id)
    if (error) throw error
  },
  delete: async (id) => {
    const { error } = await supabase.from('youtube_videos').delete().eq('id', id)
    if (error) throw error
  }
}

export const uploadFile = async (bucket, file, path) => {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, file, { upsert: true })
  if (error) throw error
  const { publicURL } = supabase.storage.from(bucket).getPublicUrl(path)
  return publicURL
}
