import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  changeAvatarService,
  changePasswordService,
  getUserInfoService,
  logOutService,
  signInService,
  signUpService,
  updateUserInfoService,
  changeBannerService,
} from './services/auth';

const initialState = {
  user: {},
  accessToken: '',
  failAttempt: false,
  isLoading: false,
  isLogin: false,
  error: '',
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, firstname, lastname, password, passwordConfirmation }, thunkAPI) => {
    try {
      await signUpService(email, firstname, lastname, password, passwordConfirmation);
      return 'Sign up successfully';
    } catch (err) {
      return thunkAPI.rejectWithValue(err?.response?.status);
    }
  },
);

export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }, thunkAPI) => {
  try {
    const response = await signInService(email, password);
    console.log('Sign in successfully');
    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err?.response?.status);
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (axiosPrivate, thunkAPI) => {
  try {
    await logOutService(axiosPrivate);
  } catch (err) {
    return thunkAPI.rejectWithValue(err?.response?.status);
  }
});

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async (axiosPrivate, thunkAPI) => {
  try {
    const response = await getUserInfoService(axiosPrivate);
    console.log('Get user info successfully');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.status);
  }
});

export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async ({ axiosPrivate, firstName, lastName, dateOfBirth, phoneNumber, description }, thunkAPI) => {
    try {
      await updateUserInfoService(axiosPrivate, firstName, lastName, dateOfBirth, phoneNumber, description);
      return 'Update user info successfully';
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.status);
    }
  },
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async ({ axiosPrivate, oldPassword, newPassword }, thunkAPI) => {
    try {
      await changePasswordService(axiosPrivate, oldPassword, newPassword);
      return 'Change password successfully';
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.status);
    }
  },
);

export const changeAvatar = createAsyncThunk('auth/changeAvatar', async ({ axiosPrivate, newImageUrl }, thunkAPI) => {
  try {
    await changeAvatarService(axiosPrivate, newImageUrl);
    return 'Change avatar successfully';
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.status);
  }
});

export const changeBanner = createAsyncThunk('auth/changeBanner', async ({ axiosPrivate, newImageUrl }, thunkAPI) => {
  try {
    await changeBannerService(axiosPrivate, newImageUrl);
    return 'Change banner successfully';
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.status);
  }
});

//Các reducers để update lại state trong store
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    pending: (state) => {
      state.isLoading = true;
    },
    finish: (state) => {
      state.isLoading = false;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    setFailAttempt: (state) => {
      state.failAttempt = true;
    },
  },
  extraReducers: (builder) => {
    // Sign in
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogin = true;
      state.isLoading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.error = '';
    });

    // Logout
    builder.addCase(logOut.fulfilled, (state) => {
      state.isLogin = false;
      state.user = {};
      state.accessToken = '';
      state.isLoading = false;
      state.error = '';
    });

    // Logout
    builder.addCase(logOut.rejected, (state, action) => {
      state.isLogin = false;
      state.user = {};
      state.accessToken = '';
      state.isLoading = false;
      state.error = '';
      console.log(action.payload);
    });

    // Get user info
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = {
        ...state.user,
        ...action.payload.data,
      };
      state.error = '';
    });

    const pendingList = [
      signUp.pending,
      signIn.pending,
      logOut.pending,
      getUserInfo.pending,
      updateUserInfo.pending,
      changePassword.pending,
      changeAvatar.pending,
    ];
    const emptyFulfilledList = [
      signUp.fulfilled,
      updateUserInfo.fulfilled,
      changePassword.fulfilled,
      changeAvatar.fulfilled,
    ];
    const rejectedList = [
      signUp.rejected,
      signIn.rejected,
      getUserInfo.rejected,
      updateUserInfo.rejected,
      changePassword.rejected,
      changeAvatar.rejected,
    ];

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addMatcher(isAnyOf(...emptyFulfilledList), (state, action) => {
      state.isLoading = false;
      state.error = '';
      console.log(action.payload);
    });
    builder.addMatcher(isAnyOf(...rejectedList), (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    });
  },
});

export default authSlice.reducer;

export const { pending, finish, setAccessToken, setFailAttempt } = authSlice.actions;
