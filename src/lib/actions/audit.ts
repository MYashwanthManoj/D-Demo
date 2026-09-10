import prisma from "@/lib/prisma"

interface AuditLogPayload {
  adminId: string
  action: string
  entityType: string
  entityId: string
  beforeState?: Record<string, any>
  afterState?: Record<string, any>
}

export async function createAuditLog(payload: AuditLogPayload) {
  try {
    await prisma.auditLog.create({
      data: {
        adminId: payload.adminId,
        action: payload.action,
        entityType: payload.entityType,
        entityId: payload.entityId,
        beforeState: payload.beforeState ? JSON.stringify(payload.beforeState) : null,
        afterState: payload.afterState ? JSON.stringify(payload.afterState) : null,
      }
    })
  } catch (error) {
    console.error("Failed to create audit log:", error)
    // We don't throw here to prevent breaking the main transaction, 
    // but in a strict production environment, we might want to alert on this.
  }
}
