import { NextResponse } from "next/server";
import {
  createContentsTable,
  insertContent,
  updateContent,
  getAllContents,
  deleteContent,
} from "../../../lib/db";

createContentsTable();

export async function GET() {
  try {
    const contents = getAllContents();
    return NextResponse.json({ success: true, contents });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: any) {
  try {
    const body = await request.json();
    const { contentTitle, contentDescription, isSelectedItem } = body;
    if (!contentTitle || !contentDescription) {
      return NextResponse.json(
        {
          success: false,
          message: "content Title and content Description are required",
        },
        { status: 400 }
      );
    }

    insertContent(contentTitle, contentDescription, isSelectedItem);
    return NextResponse.json({
      success: true,
      message: "Content created successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(request: any) {
  try {
    const body = await request.json();
    const { contentTitle, contentDescription, id, isSelectedItem } = body;
    if (!id || !contentTitle || !contentDescription) {
      return NextResponse.json(
        {
          success: false,
          message: "content Title and content Description are required",
        },
        { status: 400 }
      );
    }

    updateContent(contentTitle, contentDescription, id, isSelectedItem);
    return NextResponse.json({
      success: true,
      message: "Content updated successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: any) {
  try {
    const body = await request.json();
    const { id } = body;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "id is required" },
        { status: 400 }
      );
    }

    deleteContent(id);
    return NextResponse.json({
      success: true,
      message: "Content deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}
