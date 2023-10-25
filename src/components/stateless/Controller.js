import React from "react";
import styles from "./Ipod.module.css"

// Functional Controller Component to handle the Click-Rotate operations in the Ipod
const Controller = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const {
		menu,
		rotate,
		tap,
		isMenuVisible,
		addClass,
		removeClass,
		mouse,
		screen,
		controllerRef,
		play,
		songsList,
		nextSong,
		prevSong,
		theme,
	} = props;
	//------------------------------------------------------------------------------------------
	// Changing the Controller Container Theme
	const styling = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<div
			className={styles.outerCircle}
			// id="controller-container"
			ref={controllerRef}
			// style={styling()}
			onClick={(e) => {
				e.stopPropagation();
				return;
			}}
			onMouseDown={(e) => {
				e.stopPropagation();
				rotate(menu);
				return;
			}}
			onMouseUp={(e) => {
				e.stopPropagation();
				removeClass("inner-circle", "down");
				return;
			}}
		>
			{/* <div
				className="controller"
				draggable="false"
				ref={controllerRef}
				style={styles.controller}
				onClick={(e) => {
					e.stopPropagation();
					return;
				}}
				onMouseDown={(e) => {
					e.stopPropagation();
					rotate(menu);
					return;
				}}
				onMouseUp={(e) => {
					e.stopPropagation();
					removeClass("inner-circle", "down");
					return;
				}}
				id="controller"
			> */}
				<div
					// className={
					// 	mouse.innerCircle === ""
					// 		? "inner-circle"
					// 		: "inner-circle down"
					// }
					className={styles.innerCircle}
					draggable="false"
					// style={{ height: 80, width: 80 }}
					onClick={(e) => {
						e.stopPropagation();
						tap(menu, screen);
						return;
					}}
					onMouseDown={(e) => {
						e.stopPropagation();
						addClass("inner-circle", "down");
						return;
					}}
					onMouseUp={(e) => {
						e.stopPropagation();
						removeClass("inner-circle", "down");
						return;
					}}
				></div>
				<div
					className={styles.menuButton}
					draggable="false"
					onClick={(e) => {
						e.stopPropagation();
						isMenuVisible(menu, screen);
						return;
					}}
				>
					{/* <h1 style={styles.menu} draggable="false"> */}
						MENU
					{/* </h1> */}
				</div>
				<div  className={styles.forwardButton} draggable="false">
					<img
						src="https://cdn-icons-png.flaticon.com/128/659/659915.png"						 alt="forward"
						 style={{ width: '100%', height: '100%'}} 
						 draggable="false"
						onClick={() => {
							nextSong(songsList);
						}}
					/>
				</div>
				<div className={styles.backwardButton} draggable="false">
					<img
						src="https://cdn-icons-png.flaticon.com/128/10397/10397721.png" 
						alt="Back" 
						style={{ width: '100%', height: '100%'}}
						draggable="false"
						onClick={() => {
							prevSong(songsList);
						}}
					/>
				</div>
				<div
					className={styles.playButton}
					draggable="false"
					onClick={() => {
						play(songsList);
					}}
				>
					<img
                         src="https://cdn-icons-png.flaticon.com/128/10419/10419335.png" 
						 alt="play-pause"
						 style={{ width: '100%', height: '100%'}} 						draggable="false"
					/>
				</div>
			{/* </div> */}
		</div>
	);
	//------------------------------------------------------------------------------------------
};

// const styles = {
// 	controller: {
// 		height: 230,
// 		width: 230,
// 	},
// 	forward: {
// 		height: 56,
// 		width: 60,
// 		cursor: "pointer",
// 		padding: "10px",
// 	},
// 	backward: {
// 		height: 55,
// 		width: 60,
// 		transform: "rotate(180deg)",
// 		cursor: "pointer",
// 		padding: "10px",
// 	},
// 	menu: {
// 		fontWeight: "bolder",
// 		fontSize: 27,
// 		cursor: "pointer",
// 		padding: "5px",
// 	},
// 	resume: {
// 		height: "50px",
// 		width: "60px",
// 		cursor: "pointer",
// 		padding: "12px",
// 	},
// };

export default Controller;
