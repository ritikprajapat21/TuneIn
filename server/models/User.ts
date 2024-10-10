import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter your name"],
		},
		email: {
			type: String,
			required: [true, "Please enter your email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please enter your password"],
		},
		createdPodcasts: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Podcast",
			},
		],
	},
	{ timestamps: true },
);
const User = mongoose.model("User", UserSchema);

export default User;

// CreatedPodcast
// LikedPodcast
// Comment
// PodcastModel
// Title
// Description
// Content
// timestamps
//Like count
//Comment model
//Username
//Content
//timestamps
