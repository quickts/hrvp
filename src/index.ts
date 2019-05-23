export function Success(): { success: true };
export function Success<T>(data: T): { success: true; data: T };
export function Success(data?: any) {
    if (data === undefined) {
        return { success: true };
    }
    return {
        success: true,
        data: data
    };
}

export function Failure(error: string): { success: false; error: string } {
    return {
        success: false,
        error: error
    };
}
