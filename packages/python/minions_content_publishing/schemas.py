"""
Minions Content-publishing SDK — Type Schemas
Custom MinionType schemas for Minions Content-publishing.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

publish_job_type = MinionType(
    id="content-publishing-publish-job",
    name="Publish job",
    slug="publish-job",
    description="A job to publish content to a social platform.",
    icon="📤",
    schema=[
        FieldDefinition(name="assetBundleId", type="string", label="assetBundleId"),
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="scheduledAt", type="string", label="scheduledAt"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="approvalRequestId", type="string", label="approvalRequestId"),
        FieldDefinition(name="priority", type="select", label="priority"),
    ],
)

delivery_receipt_type = MinionType(
    id="content-publishing-delivery-receipt",
    name="Delivery receipt",
    slug="delivery-receipt",
    description="Confirmation that content was posted to a platform.",
    icon="✅",
    schema=[
        FieldDefinition(name="publishJobId", type="string", label="publishJobId"),
        FieldDefinition(name="accountId", type="string", label="accountId"),
        FieldDefinition(name="publishedAt", type="string", label="publishedAt"),
        FieldDefinition(name="platformPostId", type="string", label="platformPostId"),
        FieldDefinition(name="platformUrl", type="string", label="platformUrl"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

engagement_snapshot_type = MinionType(
    id="content-publishing-engagement-snapshot",
    name="Engagement snapshot",
    slug="engagement-snapshot",
    description="Post-publish engagement metrics.",
    icon="📊",
    schema=[
        FieldDefinition(name="deliveryReceiptId", type="string", label="deliveryReceiptId"),
        FieldDefinition(name="likes", type="number", label="likes"),
        FieldDefinition(name="comments", type="number", label="comments"),
        FieldDefinition(name="shares", type="number", label="shares"),
        FieldDefinition(name="views", type="number", label="views"),
        FieldDefinition(name="capturedAt", type="string", label="capturedAt"),
    ],
)

custom_types: list[MinionType] = [
    publish_job_type,
    delivery_receipt_type,
    engagement_snapshot_type,
]

