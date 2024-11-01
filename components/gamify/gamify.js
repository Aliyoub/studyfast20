// import Gamify from 'gamify.js';

// const gamify = new Gamify();

export const addPoints = (user, points) => {
    if (!user.points) user.points = 0;
    user.points += points;

    // Example badge system
    if (user.points >= 100) {
        addBadge(user, "Gold Badge");
    } else if (user.points >= 50) {
        addBadge(user, "Silver Badge");
    } else if (user.points >= 10) {
        addBadge(user, "Bronze Badge");
    }
};

export const addBadge = (user, badge) => {
    if (!user.badges) user.badges = [];
    if (!user.badges.includes(badge)) {
        user.badges.push(badge);
    }
};

export const getUserPerformance = (user) => {
    return {
        points: user.points || 0,
        badges: user.badges || []
    };
};