import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  changeAvatarService,
  changePasswordService,
  getUserInfoService,
  logOutService,
  signInService,
  signUpService,
  updateUserInfoService,
} from './services/auth';

const initialState = {
  user: {},
  accessToken: '',
  isLoading: false,
};

export const signUp = createAsyncThunk(
  'auth/signUp',
  async ({ email, firstname, lastname, password, passwordConfirmation }, thunkAPI) => {
    try {
      await signUpService(email, firstname, lastname, password, passwordConfirmation);
      return 'Sign up successfully';
    } catch (err) {
      return thunkAPI.rejectWithValue(String(err));
    }
  },
);

export const signIn = createAsyncThunk('auth/signIn', async ({ email, password }, thunkAPI) => {
  try {
    const response = await signInService(email, password);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(String(err));
  }
});

export const logOut = createAsyncThunk('auth/logOut', async (accessToken, thunkAPI) => {
  try {
    await logOutService(accessToken);
  } catch (err) {
    return thunkAPI.rejectWithValue(String(err));
  }
});

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async (axiosPrivate, thunkAPI) => {
  try {
    const response = await getUserInfoService(axiosPrivate);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(String(error));
  }
});

export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async ({ axiosPrivate, firstName, lastName, dateOfBirth, phoneNumber, description }, thunkAPI) => {
    try {
      await updateUserInfoService(axiosPrivate, firstName, lastName, dateOfBirth, phoneNumber, description);
      return 'Update user info successfully';
    } catch (error) {
      return thunkAPI.rejectWithValue(String(error));
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
      return thunkAPI.rejectWithValue(String(error));
    }
  },
);

export const changeAvatar = createAsyncThunk('auth/changeAvatar', async ({ axiosPrivate, newImageUrl }, thunkAPI) => {
  try {
    await changeAvatarService(axiosPrivate, newImageUrl);
    return 'Change avatar successfully';
  } catch (error) {
    return thunkAPI.rejectWithValue(String(error));
  }
});

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
  },
  extraReducers: (builder) => {
    // Sign in
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });

    // Logout
    builder.addCase(logOut.fulfilled, (state) => {
      state.user = {};
      state.accessToken = '';
      state.isLoading = false;
    });

    // Get user info
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = {
        ...state.user,
        ...action.payload.data,
      };
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
      logOut.rejected,
      getUserInfo.rejected,
      updateUserInfo.rejected,
      changePassword.rejected,
      changeAvatar.rejected,
    ];

    builder.addMatcher(isAnyOf(...pendingList), (state) => {
      state.isLoading = true;
    });
    builder.addMatcher(isAnyOf(...emptyFulfilledList), (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
    builder.addMatcher(isAnyOf(...rejectedList), (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
    });
  },
});

export default authSlice.reducer;

const { pending, finish } = authSlice.actions;
export { pending, finish };
