import { Request, Response } from "express";
import { createUser, createUserAdmin, disableUser, findUser, findUsers, updateUser, updateUserPassword } from "../services/UserService";
import { sendEmail, validateCode } from "../services/EmailService";

export const create = async (req: Request, res: Response) => {
    try {
        createUser(req, res);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};

export const createAdmin = async (req: Request, res: Response) => {
    try {
        createUserAdmin(req, res);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
}

export const disable = async (req: Request, res: Response) => {
    try {
        disableUser(req, res);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};

export const update = async (req: Request, res: Response) => {
    try {
        updateUser(req, res);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};

export const findOne = async (req: Request, res: Response) => {
    try {
        findUser(req, res);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};

export const find = async (req: Request, res: Response) => {
    try {
        if (req.query["email"] != undefined) {
            findUser(req, res);
        } else {
            findUsers(req, res);
        }
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};

export const sendCode = async (req: Request, res: Response) => {
    try {
        await sendEmail(req, res);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};


export const updatePassword = async (req: Request, res: Response) => {
    try {
        validateCode(req, res);
        
        updateUserPassword(req, res);
    } catch (error) {
        console.error(error);
        if (error instanceof Error) {
            res.status(400).json({ success: false, message: error.message });
        }
    }
};