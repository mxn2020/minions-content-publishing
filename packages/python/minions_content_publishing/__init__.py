"""
Minions Content-publishing Python SDK

Publish queue, delivery receipts, and mode configuration
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Content-publishing.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
