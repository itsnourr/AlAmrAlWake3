import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PostBottomBar.css';

const PostBottomBar = ({ counters, onReact, selectedReaction, oneHourPassed }) => {
    const reactions = [
        { icon: "hand-thumbs-up", fillIcon: "hand-thumbs-up-fill", label: "Like", color: "blue", counter: counters[0] },
        { icon: "heart", fillIcon: "heart-fill", label: "Love", color: "purple", counter: counters[1] },
        { icon: "emoji-surprise", fillIcon: "emoji-surprise-fill", label: "Wow", color: "green", counter: counters[2] },
        { icon: "lightbulb", fillIcon: "lightbulb-fill", label: "Insightful", color: "goldenrod", counter: counters[3] },
        { icon: "emoji-tear", fillIcon: "emoji-tear-fill", label: "Sad", color: "deepskyblue", counter: counters[4] },
        { icon: "emoji-angry", fillIcon: "emoji-angry-fill", label: "Angry", color: "red", counter: counters[5] },
    ];

    return (
        <div className="post-bottom-bar px-4 py-3">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex flex-wrap gap-3">
                    {reactions.map((reaction, index) => {
                        const isSelected = selectedReaction === index;
                        const iconClass = isSelected ? reaction.fillIcon : reaction.icon;
                        const colorClass = `reaction-${reaction.label.toLowerCase()}`;

                        return (
                            <div key={index} className="d-flex align-items-center">
                                <button
                                    className={`reaction-btn ${colorClass} ${isSelected ? 'active' : ''}`}
                                    onClick={() => onReact(index)}
                                    title={reaction.label}
                                >
                                    <i className={`bi bi-${iconClass}`}></i>
                                </button>
                                <span className="ms-2 text-muted small">{reaction.counter}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Flag section */}
                {oneHourPassed && (
                    <div className="d-flex align-items-center mt-3 mt-md-0">
                        <button
                            className={`btn btn-outline-danger d-flex align-items-center ${(counters[7] == 1) ? 'flag-active' : ''}`}
                            style={{ borderRadius: '20px', padding: '4px 10px' }}
                            onClick={() => onReact(6)}
                        >
                            <i className={`bi ${(counters[7] == 1) ? 'bi-flag-fill' : 'bi-flag'} me-2`}></i>
                            {(counters[7] == 1) ? 'Flagged as Suspicious' : 'Flag as Suspicious'}
                        </button>

                        <span className="ms-2 text-muted small">{counters[6]}</span>
                    </div>
                )}

            </div>
        </div>
    );
};

export default PostBottomBar;