import { NextResponse } from "next/server";
import { createUsersTable, insertUser, updateUser, getAllUsers, deleteUser } from "../../../lib/db";

createUsersTable();

export async function GET() {
  try {
    const users = getAllUsers();
    return NextResponse.json({ success: true, users });
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
    const { name, email } = body;
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and email are required" },
        { status: 400 }
      );
    }

    insertUser(name, email);
    return NextResponse.json({
      success: true,
      message: "User created successfully",
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
    const { id, name } = body;
    if (!id || !name) {
      return NextResponse.json(
        { success: false, message: "id and name are required" },
        { status: 400 }
      );
    }

    updateUser(id, name);
    return NextResponse.json({
      success: true,
      message: "User updated successfully",
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
    if (!id ) {
      return NextResponse.json(
        { success: false, message: "id is required" },
        { status: 400 }
      );
    }

    deleteUser(id);
    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}