import React from "react";
import styles from "./Ipod.module.css"

// Functional Menu Component to Render the Various MENUs
const Menu = (props) => {
	//------------------------------------------------------------------------------------------
	// Unpacking the Props
	const { menu } = props;
	const {
		optionsIndex,
		musicIndex,
		settingsIndex,
		options,
		musicVisible,
		menuVisible,
		settingsVisible,
	} = menu;
	let show = "No Show Available";
	let menuArray, musicArray, settingsArray, value;
	//------------------------------------------------------------------------------------------
	// To check the Menu Visibility
	if (menuVisible === "yes") {
		show = "menu";
		menuArray = options.map((object) => {
			const temp = Object.keys(object);
			return temp[0];
		});
		const val = menuArray[optionsIndex];
		value = val;
	}
	if (musicVisible === "yes") {
		show = "music";
		musicArray = options[optionsIndex].music;
		const val = musicArray[musicIndex];
		value = val;
	}
	if (settingsVisible === "yes") {
		show = "settings";
		settingsArray = options[optionsIndex].settings;
		const val = settingsArray[settingsIndex];
		value = val;
	}
	//------------------------------------------------------------------------------------------
	// Used in JSX Rendering
	const divStyling = (item) => {
		if (value === item) {
			// return { backgroundColor: "cyan" };
			return {
				background: "linear-gradient(to right, #a8edea, #f8cdda 70%)",
				border: "2px solid #000"
			  };
		}
		return {};
	};
	const imgStyling = (item) => {
		if (value === item) {
			return { display: "initial" };
		}
		return {};
	};
	//------------------------------------------------------------------------------------------
	// Menu to be Rendered
	let RenderMenu = "Will be rendered in the future";
	// Main Menu
	if (show === "menu") {
		RenderMenu = menuArray.map((item) => {
			return (
				<div className={item} style={divStyling(item)} id="options">
					<p style={styles.text}>{item}</p>
					<img
						src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
						alt="select"
						style={imgStyling(item)}
					/>
				</div>
			);
		});
	}
	// Music Menu
	else if (show === "music") {
		RenderMenu = musicArray.map((item) => (
			<div className={item} style={divStyling(item)} id="options">
				<p style={styles.text}>{item}</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}
	// Settings Menu
	else if (show === "settings") {
		RenderMenu = settingsArray.map((item) => (
			<div className={item} style={divStyling(item)} id="options">
				<p style={styles.text}>{item.replace("-", " ")}</p>
				<img
					src="https://cdn-icons-png.flaticon.com/512/81/81068.png"
					alt="select"
					style={imgStyling(item)}
				/>
			</div>
		));
	}
	//------------------------------------------------------------------------------------------
	// Rendering the Menu as a whole
	return (
		<div
			className={`${menuVisible === "no" ? `${styles.hide} ` : `${styles.menu} `}`}
		>
		<div style={{
			fontSize: "1.3rem",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			textShadow: "1px 2px 0px lightgray",
			borderRadius: "10% 10% 0 0", 
			marginBottom: "10px"
			}}>
			<p>Mini Ipod</p>
		</div>

			{RenderMenu}
		</div>
	);
	//------------------------------------------------------------------------------------------
};

// const styles = {
// 	title: {
// 		fontSize: "1.3rem",
// 		display: "flex",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		textShadow: "1px 2px 0px lightgray",
// 		borderRadiusTopLeft: "10%",
// 	},
// 	text: {
// 		marginLeft: "1rem",
// 		textTransform: "capitalize",
// 	},
// 	menu: {
// 		// backgroundColor: "",
// 		backgroundImage: 'linear-gradient(45deg, #a8edea 0%, #fed6e3 100%)',
// 		borderRadiusTopLeft: "10%",
// 	},
// };

export default Menu;
