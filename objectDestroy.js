function OnCollisionEnter(collision : Collision)
{
    if (collision.gameObject.tag == "Pickup 1")
    {
        Destroy(collision.gameObject);
    }
}