export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        posts: [
            { id: 1, message: "Hello! What's up??", likes: 12, },
            { id: 2, message: 'Yo!', likes: 15, },
            { id: 3, message: 'Good day!', likes: 10, },
            { id: 4, message: "Basketball, it's wonderful game!", likes: 25, },
            { id: 5, message: "Every day, it's your chance!", likes: 38, },
        ],
        newPostText: 'New post text...',
    },
    reducers: {

    }
})