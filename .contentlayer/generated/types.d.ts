// NOTE This file is auto-generated by Contentlayer

import type {
	Markdown,
	MDX,
	ImageFieldData,
	IsoDateTimeString,
} from "contentlayer/core";
import * as Local from "contentlayer/source-files";

export { isType } from "contentlayer/client";

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString };

/** Document types */
export type Page = {
	/** File path relative to `contentDirPath` */
	_id: string;
	_raw: Local.RawDocumentData;
	type: "Page";
	title: string;
	description?: string | undefined;
	/** MDX file body */
	body: MDX;
	path: string;
	slug: string;
};

export type Project = {
	/** File path relative to `contentDirPath` */
	_id: string;
	_raw: Local.RawDocumentData;
	type: "Project";
	published?: boolean | undefined;
	title: string;
	description: string;
	date?: IsoDateTimeString | undefined;
	url?: string | undefined;
	repository?: string | undefined;
	/** MDX file body */
	body: MDX;
	path: string;
	slug: string;
};

/** Nested types */

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes;
export type AllTypeNames = DocumentTypeNames | NestedTypeNames;

export type DocumentTypes = Page | Project;
export type DocumentTypeNames = "Page" | "Project";

export type NestedTypes = never;
export type NestedTypeNames = never;

export type DataExports = {
	allDocuments: DocumentTypes[];
	allPages: Page[];
	allProjects: Project[];
};

export interface ContentlayerGenTypes {
	documentTypes: DocumentTypes;
	documentTypeMap: DocumentTypeMap;
	documentTypeNames: DocumentTypeNames;
	nestedTypes: NestedTypes;
	nestedTypeMap: NestedTypeMap;
	nestedTypeNames: NestedTypeNames;
	allTypeNames: AllTypeNames;
	dataExports: DataExports;
}

declare global {
	interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
	Page: Page;
	Project: Project;
};

export type NestedTypeMap = {};
