import React from "react";
import Menu from "./Menu";
import Allsongs from "./Allsongs";
import styles from "./Ipod.module.css"

// Functional Display Component to Render the Display in Ipod
const Display = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { menu, screen, songsList, updateProgress, progressRef, theme } =
		props;
	const { wallpaper, screenIndex } = screen;
	//------------------------------------------------------------------------------------------
	// Changing the Ipod Display Theme Color
	const themeDisplay = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
	//------------------------------------------------------------------------------------------
	return (
		<>
		<div className={styles.upperMostScreen}>
			<p style={{display:'inline', margin:'0', width: '', height: '100%',marginLeft: '10px' }}> 12:12 Am</p>
			<img style={{ width: '15px', height: '100%',marginRight: '10px' , color:'white' }}
				src="https://cdn-icons-png.flaticon.com/128/664/664883.png" alt="" />
         </div>
		<div className={styles.mainDisplay} >
			{screenIndex === 7 && (
				<Allsongs
					songsList={songsList}
					updateProgress={updateProgress}
					progressRef={progressRef}
				/>
			)}
			{screenIndex !== 7 && (
				<img
					src={wallpaper[screenIndex]}
					alt="DISPLAY SCREEN"
					style={{
						height: "100%",
						width: "100%",
						// borderTopLeftRadius: "10%",
						// borderTopRightRadius: "10%",
						zIndex: 2,
					}}
				/>
			)}
			{/* <div className={styles.MenuCompo}> */}
			<Menu menu={menu} />
			{/* </div> */}

		</div>
		</>
	);
	//------------------------------------------------------------------------------------------
};

export default Display;
