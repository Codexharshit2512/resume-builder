import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import FormFooter from "./FormFooter";
import { useSelector } from "react-redux";
import ResumePreview from "./ResumePreview";
const useStyles = makeStyles((theme) => ({
  root: {
    background: `linear-gradient(
        45deg,
        #1dbfaf 0,
        #1eaedb 85%,
        #1eaedb 100%
      )`,
  },
}));
const SkillBlock = () => {
  const classes = useStyles();
  const skills = useSelector((state) => state.skills);
  console.log(skills);
  const [tags, setTags] = useState(skills);
  const [val, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (val.length > 0) setTags((tags) => [...tags, val]);
    setValue("");
  };

  const handleDelete = (text) => {
    const arr = tags.filter((tag) => tag != text);
    setTags(arr);
  };
  return (
    <div className="form_flex">
      <div className="form_block">
        <div className="tags_container">
          {tags.map((tag) => (
            <Chip
              style={{ marginLeft: "6px", marginTop: "3px" }}
              key={tag}
              label={tag}
              onDelete={() => handleDelete(tag)}
              color="primary"
              className={classes.root}
            />
          ))}
        </div>
        <form style={{ marginTop: "1rem" }} onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Add Skills</label>
            <input
              type="text"
              value={val}
              onChange={(e) => setValue(e.target.value)}
            />
            <p className="small_text">Press 'Enter' to add skill</p>
          </div>
        </form>
        <FormFooter route="skills" data={tags} />
      </div>
      <ResumePreview route="skills" active={tags} />
    </div>
  );
};

export default SkillBlock;
