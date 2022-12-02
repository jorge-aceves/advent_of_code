def read_file(file_name)
  file = File.open(file_name, "r")
  data = file.read
  file.close
  return data
end


file_name = "input.txt"
arr = read_file(file_name).split(",").map(&:to_i)
total = arr.size
days = {}
for i in 0..8 do days[i] = 0 end
arr.each {|e| days[e] += 1}
for i in 1..256 do
  new_days = {}
  for k in 0..8 do new_days[k] = 0 end
  total += days[0]
  new_days[6] = days[0]
  new_days[8] = days[0]
  for i in 1..8 do
    new_days[i-1] += days[i]
  end
  days = new_days
end
p total