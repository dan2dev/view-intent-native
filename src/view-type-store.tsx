import { IIntent, IViewInfo } from "./types";
import View from "./view";
import { Helper } from "./helper";

export namespace ViewTypeStore {
	export interface IViewTypeInfo {
		storeName: string;
		areaName: string;
		viewType: View.IViewConstructor;
		typeName: string;
		frameId: string;
		require: string[];
	}
	const store: { [storeName: string]: IViewTypeInfo } = {};

	export function registerViewType(viewInfo: IViewInfo) {
		// console.log(viewInfo);
		const storeName = Helper.getStoreName(viewInfo.area, viewInfo.name);
		store[storeName] = {
			storeName,
			areaName: viewInfo.area,
			typeName: viewInfo.name,
			viewType: viewInfo.type,
			frameId: viewInfo.frameId || "root",
			require: viewInfo.require || [],
		};
	}

	// export function registerViewType(areaName: string, typeName: string, viewType: View.IViewConstructor, frameId: string, require: string[] = []) {
	// 	const storeName = Helper.getStoreName(areaName, typeName);
	// 	store[storeName] = {
	// 		storeName,
	// 		areaName,
	// 		typeName,
	// 		viewType,
	// 		frameId,
	// 		require,
	// 	};
	// }
	export function getViewTypeByStoreName(storeName: string): View.IViewConstructor {
		if (storeName.indexOf(".") > -1) {
			return store[storeName.toLowerCase()].viewType;
		} else {
			throw new Error("Wrong storeName Type naming. Should be like this: (any-area-name.ViewType)");
		}
	}
	export function getViewType(areaName: string, typeName: string): View.IViewConstructor {
		return getViewTypeInfo(areaName, typeName).viewType;
	}
	export function getViewTypeInfo(areaName: string, typeName: string): IViewTypeInfo {
		let viewTypeInfo: IViewTypeInfo = store[Helper.getStoreName(areaName, typeName)];
		if (viewTypeInfo === null || viewTypeInfo === undefined) {
			viewTypeInfo = store[Helper.getStoreName("default", "ViewNotFound")];
		}
		return viewTypeInfo;
		// return store[getStoreName(areaName, typeName)];
	}
}
