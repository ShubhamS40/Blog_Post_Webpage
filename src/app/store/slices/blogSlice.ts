import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Blog {
  id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  slug: string;
}

interface BlogState {
  blogs: Blog[];
  loading: boolean;
  error: string | null;
}

const initialState: BlogState = {
  blogs: [],
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    fetchBlogsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchBlogsSuccess(state, action: PayloadAction<Blog[]>) {
      state.loading = false;
      state.blogs = action.payload;
    },
    fetchBlogsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure } = blogSlice.actions;

export default blogSlice.reducer;
