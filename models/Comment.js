const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false  
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: User.id
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: Post.id
        }
    },
    {
        hooks: {
            beforeCreate: async(newCommentData) => {
                const today = await new Date();
                newCommentData.date = today.toLocaleString();
                return newCommentData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

module.exports = Comment;