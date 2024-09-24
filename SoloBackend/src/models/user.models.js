import mongoose from "mongoose";

const TeamSchema = mongoose.Schema({
    team_name: {
        type: String,
        required: true,
        unique: true
    },
    problem_id: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    leader_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    utr: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Team = mongoose.model("Team", TeamSchema);
