import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API_CONFIG, API_ENDPOINTS } from '@/config/api.config';

interface Casino {
  id: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
  website_url: string;
  bonus_info: string;
  features: string[];
  is_featured: boolean;
  category_id: string;
  created_at: string;
  updated_at: string;
}

interface CasinoState {
  casinos: Casino[];
  featuredCasinos: Casino[];
  currentCasino: Casino | null;
  loading: boolean;
  error: string | null;
  lastFetched: number | null;
}

const initialState: CasinoState = {
  casinos: [],
  featuredCasinos: [],
  currentCasino: null,
  loading: false,
  error: null,
  lastFetched: null,
};

export const fetchCasinos = createAsyncThunk(
  'casinos/fetchCasinos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_ENDPOINTS.CASINOS}`);
      if (!response.ok) throw new Error('Failed to fetch casinos');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch casinos');
    }
  }
);

export const fetchFeaturedCasinos = createAsyncThunk(
  'casinos/fetchFeaturedCasinos',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_ENDPOINTS.FEATURED_CASINOS}`);
      if (!response.ok) throw new Error('Failed to fetch featured casinos');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch featured casinos');
    }
  }
);

export const fetchCasinoById = createAsyncThunk(
  'casinos/fetchCasinoById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_ENDPOINTS.CASINO_BY_ID(id)}`);
      if (!response.ok) throw new Error('Failed to fetch casino');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Failed to fetch casino');
    }
  }
);

const casinoSlice = createSlice({
  name: 'casinos',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setCurrentCasino: (state, action: PayloadAction<Casino | null>) => {
      state.currentCasino = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all casinos
      .addCase(fetchCasinos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCasinos.fulfilled, (state, action) => {
        state.loading = false;
        state.casinos = action.payload;
        state.lastFetched = Date.now();
      })
      .addCase(fetchCasinos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch featured casinos
      .addCase(fetchFeaturedCasinos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeaturedCasinos.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredCasinos = action.payload;
      })
      .addCase(fetchFeaturedCasinos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch casino by ID
      .addCase(fetchCasinoById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCasinoById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCasino = action.payload;
      })
      .addCase(fetchCasinoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, setCurrentCasino } = casinoSlice.actions;
export default casinoSlice.reducer;
